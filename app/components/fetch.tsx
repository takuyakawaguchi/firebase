'use client'
import React from 'react';
import useSWR from 'swr';

const API = 'https://api.github.com/repos/vercel/swr';
const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());

export default function RepoComponent() {
  const { data, error } = useSWR(API, fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong> {data.subscribers_count}</strong>{" "}
      <strong> {data.stargazers_count}</strong>{" "}
      <strong>{data.forks_count}</strong>
    </div>
  );
}