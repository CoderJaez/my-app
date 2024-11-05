"use server";
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { getUsers } from "@/services/user.service";
import User from "@/types/user";
export default async function Home() {
  const users = await getUsers();
  return (
    <MainLayout>
      <div>
        <h1>This is home page</h1>
        <section>
          <h1>User list</h1>
          <table className="border w-full">
            <thead>
              <th>Id</th>
              <th>Username</th>
              <th>Fullname</th>
            </thead>
            <tbody>
              {users.length > 0
                ? users.map((user: User, index: number) => {
                    return (
                      <tr key={index} className="px-2 bottom-2 w-full">
                        <td>{user.id}</td>
                        <td> {user.username}</td>
                        <td>{user.fullname}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </section>
      </div>
    </MainLayout>
  );
}
