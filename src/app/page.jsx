import { supabase } from "../../utils/supabase/server";

export default async function Home() {
   
    const { data: booksData, error } = await supabase.from('booksData').select('*');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Books Table</h1>
          <table>
            <thead className="bg-slate-800">
              <tr>
                <th>Book Image</th>
                <th>Book Name</th>
                <th>Holder's Name</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{booksData.map((book) => (
                  <div key={book.id}>
                    <center><img src={book.link} alt="book image"  className="h-32 py-2 content-center"/></center>
                  </div>
                ))}</td>
                <td>{booksData.map((book) => (
                    <h2 key={book.id} className="p-14">{book.book}</h2>
                ))}</td>
                <td>{booksData.map((book) => (
                    <h2 key={book.id} className="p-14">{book.student}</h2>
                ))}</td>
                <td>{booksData.map((book) => (
                    <h2 key={book.id} className="p-14">{book.datetime}</h2>
                ))}</td>
              </tr>
            </tbody>
          </table>
    </main>
  );
}
