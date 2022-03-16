function QuoteGallery({ loading, quote, author }) {

  return (
    <main>
      {loading ? (
        <h2>Searching for knowledge...</h2>
      ) : (
        <section className="quoteSection">
          <h2>{quote}</h2>
          <h3>{author}</h3>
        </section>
      )}
    </main>
  )
}

export default QuoteGallery;