import clsx from "clsx";
import { FC } from "react";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./PostItem.module.scss";

interface IPostItem {
  onClick?: () => void;
  img: string;
  author: string;
  date: string;
  title: string;
  description: string;
  likeCount: string | number;
  commentCount: string | number;
  id: string | number;
}
export const PostItem: FC<IPostItem> = ({
  img,
  author,
  date,
  title,
  description,
  likeCount,
  commentCount,
  id,
}) => {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={styles.wrapperLeft}>
        <div className={styles.image}>
          <img src={img} />
        </div>
      </div>
      <div className={clsx(styles.wrapperContent, "divide")}>
        <div className={clsx(styles.wrapperTop, "d-flex")}>
          <div className={styles.author}>{author}</div>
          <div className={styles.time}>{date}</div>
        </div>
        <Link to={"/post/" + id} className={clsx(styles.title, "elipse-2")}>
          {title}
        </Link>
        <div className={clsx(styles.description, "elipse-3")}>
          {description}
        </div>
        <div className={clsx(styles.wrapperAction, "d-flex")}>
          <div className={styles.likeCount}>
            {likeCount}
            <FaRegComment className="icon-button" />
            {/* <FaComment /> */}
          </div>
          <div className={styles.commentCount}>
            {commentCount}
            <FaRegThumbsUp className="icon-button" />
            {/* FaThumbsUp */}
          </div>
        </div>
      </div>
    </div>
  );
};
