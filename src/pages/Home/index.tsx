import { PostItem } from "components/PostItem";
import avt from "images/avatar.png";

export const Home = () => {
  const data = [
    {
      id: 100,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title: "This is sample title in post - xxx",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit architecto iusto doloribus explicabo impedit laboriosam reiciendis dolores deserunt provident maxime incidunt ducimus distinctio, veritatis, doloremque eaque aliquam laborum vitae.",
      likeCount: 100,
      commentCount: 4,
    },
  ];
  for (let i = 0; i < 10; i++) {
    data.push({
      id: i,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title: "This is sample title in post - " + i,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit architecto iusto doloribus explicabo impedit laboriosam reiciendis dolores deserunt provident maxime incidunt ducimus distinctio, veritatis, doloremque eaque aliquam laborum vitae.",
      likeCount: 10 + i,
      commentCount: 4 + i,
    });
  }
  return (
    <div>
      <div>
        {data.map((item, index) => (
          <PostItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
