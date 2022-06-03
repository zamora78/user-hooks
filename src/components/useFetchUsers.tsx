import React from "react";
import { useState, useEffect } from "react";
import { IUser } from "../Pages/DetailPage/DetailPage";

export const useFetchUsers = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

export const useFetchUser = (id: string) => {
  const [data, setData] = useState<IUser>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
};
