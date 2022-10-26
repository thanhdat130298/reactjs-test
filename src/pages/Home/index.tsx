import { PostItem } from "components/PostItem";
import avt from "images/avatar.png";

export const Home = () => {
  const data = [
    {
      id: 1,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title:
        "Tìm hiểu về Reverse Engineering trong Android (Dịch ngược mã nguồn từ file APK)",
      description:
        "Reverse Engineering là quá trình tách biệt một thứ gì đó riêng biệt để theo dõi cách hoạt động của chúng. Decompiling là một dạng của Reverse Engineering , nơi mà một đối tượng nào đó hay cụ thể là một ứng dụng mobile có thể được phân tích ra thành source code của nó....",
      likeCount: 100,
      commentCount: 4,
    },
    {
      id: 2,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title:
        "Tìm hiểu về Reverse Engineering trong Android (Dịch ngược mã nguồn từ file APK)",
      description:
        "Reverse Engineering là quá trình tách biệt một thứ gì đó riêng biệt để theo dõi cách hoạt động của chúng. Decompiling là một dạng của Reverse Engineering , nơi mà một đối tượng nào đó hay cụ thể là một ứng dụng mobile có thể được phân tích ra thành source code của nó....",
      likeCount: 100,
      commentCount: 4,
    },
    {
      id: 3,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title:
        "Tìm hiểu về Reverse Engineering trong Android (Dịch ngược mã nguồn từ file APK)",
      description:
        "Reverse Engineering là quá trình tách biệt một thứ gì đó riêng biệt để theo dõi cách hoạt động của chúng. Decompiling là một dạng của Reverse Engineering , nơi mà một đối tượng nào đó hay cụ thể là một ứng dụng mobile có thể được phân tích ra thành source code của nó....",
      likeCount: 100,
      commentCount: 4,
    },
    {
      id: 4,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title:
        "Tìm hiểu về Reverse Engineering trong Android (Dịch ngược mã nguồn từ file APK)",
      description:
        "Reverse Engineering là quá trình tách biệt một thứ gì đó riêng biệt để theo dõi cách hoạt động của chúng. Decompiling là một dạng của Reverse Engineering , nơi mà một đối tượng nào đó hay cụ thể là một ứng dụng mobile có thể được phân tích ra thành source code của nó....",
      likeCount: 100,
      commentCount: 4,
    },
    {
      id: 5,
      img: avt,
      author: "Dat Nguyen",
      date: "Monday, 11:34 PM",
      title:
        "Tìm hiểu về Reverse Engineering trong Android (Dịch ngược mã nguồn từ file APK)",
      description:
        "Reverse Engineering là quá trình tách biệt một thứ gì đó riêng biệt để theo dõi cách hoạt động của chúng. Decompiling là một dạng của Reverse Engineering , nơi mà một đối tượng nào đó hay cụ thể là một ứng dụng mobile có thể được phân tích ra thành source code của nó....",
      likeCount: 100,
      commentCount: 4,
    },
  ];
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
