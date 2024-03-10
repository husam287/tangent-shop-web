'use client'

import classes from "@/utils/classes";
import { PaginationBarProps } from "./types";
import styles from './styles.module.scss'
import ReactPaginate from "react-paginate";
import LIMIT from "@/apis/limit";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";

export default function PaginationBar({ totalCount, currentPage = 1, onSelectPage }: PaginationBarProps) {
  const handlePageClick = (e: {
    selected: number;
  }) => {
    const targetPage = e.selected + 1
    if (currentPage === targetPage) return

    onSelectPage?.(targetPage)
  }

  return (
    <div className={classes([styles.container])}>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={totalCount / LIMIT}
        renderOnZeroPageCount={null}
        nextLabel={<IoIosArrowDropright />}
        previousLabel={<IoIosArrowDropleft />}
        breakLabel={<BiDotsHorizontal />}
        initialPage={currentPage - 1}
      />
    </div>
  );
}
