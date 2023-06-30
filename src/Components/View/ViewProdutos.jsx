import React from "react";

class ViewProdutos extends React.Component {
  render() {
    const { playerData } = this.props;
    console.log(playerData?.produto);
    return playerData?.produto ? (
      <>
        <div className="card">
          <div className="card-body row text-center ">
            {
              
                <div className="col-sm">
                 
                  <p>{playerData?.produto?.descricao}</p>
                  <p>{playerData?.produto?.preco_custo}</p>
                  <p>{playerData?.produto?.preco_venda}</p>
                </div>
             }
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="card">
          <div className="card-body row text-center ">
            {playerData?.map((item, index) => (
              <div className="col-sm" key={index}>
                {console.log(item)}
                <p>{item?.descricao}</p>
                <p>{item?.preco_custo}</p>
                <p>{item?.preco_venda}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ViewProdutos;
