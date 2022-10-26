import { useParams } from "react-router-dom";
import styles from "./PostDetail.module.scss";
export const PostDetail = () => {
  interface IParams {
    id: string | undefined;
  }
  const params: IParams = useParams();
  return <div className={styles.wrapper}>PostDetail - {params.id}</div>;
};
