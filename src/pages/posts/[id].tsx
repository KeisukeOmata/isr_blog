import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from "next";
import { Api } from '../../types/api';

type Props = {
  data: Api;
};

// api key
const key = {
  headers: {'X-API-KEY': process.env.API_KEY},
};

// // パスを返却
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     // ISRではpathsは空配列で良い
//     paths: [],
//     // fallback: trueでpathsに指定しなかったパスも、getStaticPropsの内容に沿って作成
//     fallback: true,
//   }
// }

// パスを返却
export const getStaticPaths: GetStaticPaths = async () => {
  // const data = await fetch('https://isrbrog.microcms.io/api/v1/posts', key)
  //   .then(res => res.json())
  //   .catch(() => null);
  // // パスを作成
  // const paths = data.contents.map(content => `/posts/${content.id}`);
  return {
    paths: [
      { params: { id: 'idrwqpbndv' } },
    ],
    // paths: paths,
    fallback: true,
  };
};

// propsを作成
// 引数には動的パラメータを含むコンテキストが渡される
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params.id;
  const data = await fetch('https://isrbrog.microcms.io/api/v1/posts/' + id, key,)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      data
    },
    // revalidateで指定した秒数の間は静的アセットを返す
    // 秒数が経過したら、次のリクエストで一旦はキャッシュを返しつつ、バックグラウンドでもう一度そのページを構築
    // 1秒ごとにブログ記事を読み込む
    revalidate: 1,
  };
};

export default function Post({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      <div>{data.body}</div>
    </>
  );
}
