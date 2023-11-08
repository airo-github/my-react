import React from 'react';

export default function ForSort({ src }) {
  src.sort((m, n) => n.price - m.price);
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
