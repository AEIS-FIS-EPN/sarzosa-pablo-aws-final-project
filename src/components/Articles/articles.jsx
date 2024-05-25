/* eslint-disable react/no-unknown-property */
import "@components/Articles/articles.css";

export default function Articles() {
  return (
    <section className="articles">
      <div className="container-fluid">
        <div className="row row-article text-center">
          <h1 className="articles-title">Articles</h1>
        </div>

        <div className="row row-article-table d-flex justify-content-center">
          <div className="col-12 col-sm-8 d-flex justify-content-center">
            <table className="table article-table">
              <thead className=" table-dark header">
                <tr className="article-table-header">
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td></td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
        <div className="row buttom-row d-flex justify-content-center">
          <button type="button" className="btn btn-info btn-more-articles">
            Ver más artículos
            <img src="./Projects/github.svg" alt="github" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
