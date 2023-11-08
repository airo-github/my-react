export default function ForItem({ book }) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/book/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      <dd>{book.summary}</dd>
    </>
  );
}
