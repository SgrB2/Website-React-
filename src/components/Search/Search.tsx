import React, {useState, useEffect} from "react";

import styles from "./Search.module.css";
import SearchItem from "./SearchItem/SearchItem";
import pepeClown from "../../components/Images/img/pepeclown.jpg";
import Title from "components/Title/Title";

interface Posts {
  id: number;
  image: any;
  date: string;
  title: string;
  text?: string;
}

const postSearch: Posts[] = [
    {
      id: Math.random(),
      image: pepeClown,
      date: "01.04.2023",
      title:
        'NFT-коллекционер требует вернуть полмиллиона долларов за арт с "голым лягушонком Пепе"',
    },
    {
      id: Math.random(),
      image: pepeClown,
      date: "03.04.2023",
      title:
        "Лягушонок Пепе мертв. У его создателя не получилось вернуть мем обычным пользователям интернета",
    },
    {
      id: Math.random(),
      image: pepeClown,
      date: "03.04.2023",
      title: "Пользователь Reddit сделал музыкальный клип про лягушек Пепе",
    },
    {
      id: Math.random(),
      image: pepeClown,
      date: "01.04.2023",
      title: "Как Пепе стал любимым мемом американских националистов",
    },
  ];

  const fakeRequest = (): Promise<Posts[]> => {
    return new Promise((res) => {
      setTimeout(() => res(postSearch), 2000);
    });
  };

const Search = () => {
    const [post, setPost] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fakeRequest()
        .then((res) => {
          setPost(res);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
  return (
    <div>
       < Title title="Search results..."/>
      <section>
      {loading ? (
              <p>Search...</p>
            ) : (
                postSearch.map((post) => (
                <SearchItem
                  key={post.id}
                  image={post.image}
                  date={post.date}
                  title={post.title}
                />
              ))
            )}
      </section>
    </div>
  );
};

export default Search;
