'use client'

import classes from "@/utils/classes";
import { PaginationBarProps } from "./types";
import styles from './styles.module.scss'
import ReactPaginate from "react-paginate";
import LIMIT from "@/apis/limit";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";
import useQueryParams from "@/hooks/useQueryParams";

export default function PaginationBar({ totalCount }: PaginationBarProps) {
  const { getQuery, setQuery } = useQueryParams()
  const currentPage = getQuery('page') || 1

  const handlePageClick = (e: {
    selected: number;
  }) => {
    const targetPage = e.selected + 1
    setQuery("page", `${targetPage}`)
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
        initialPage={+currentPage}
      />
    </div>
  );
}
