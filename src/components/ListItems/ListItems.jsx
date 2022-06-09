import './ListItems.css'

const ListItems = (props) => {
  console.log(props.books);
  const book = props.books.map((book) => {
    return (
      <div key={book.id}>
        <p className="book-title">{book.title}</p >
        <p>{book.author}</p>
      </div>
    );
  });
  //   const listItems = props.numbers.map((number) => <li>{number}</li>);
  return (
    <div>
      <h3>ListItems</h3>
      {/* <ul>{listItems}</ul> */}
      {book}
    </div>
  );
};

export default ListItems;
