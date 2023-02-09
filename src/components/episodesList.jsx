import React, {useState} from "react";
import {episodes} from "../fakeStorage/episodes"; // Добивим импорт
import Episode from "./episode";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";

const EpisodesList = () => {
    const count = episodes.length; // количество записей
    const pageSize = 8; // количество записей на странице, которое хотим выводить

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        console.log(pageIndex);
        setCurrentPage(pageIndex);
    };

    // const paginate = (items, pageNumber, pageSize) => {
    //   const startIndex = (pageNumber - 1) * pageSize;
    //   return [...items].splice(startIndex, pageSize);
    // };

    const pageEpisode = paginate(episodes, currentPage, pageSize);

    return (
        <div className='container'>
            <div className='row'>
                {pageEpisode.map((episode) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </div>
            <div className='row'>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default EpisodesList;
