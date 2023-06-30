import React from "react";

class ViewProdutos extends React.Component {
  render() {
    const { playerData } = this.props;
    console.log(playerData?.produto);
    return playerData?.produto ? (
      <>
        
      </>
    ) : (
      <>
        <div className="card">
          <div className="card-body row text-center ">
            {playerData?.map((item, index) => (
              <div className="col-sm" key={index}>
                {console.log(item)}
                <p>Descrição: {item?.descricao}</p>
                <p>Preco custo: {item?.preco_custo}</p>
                <p>Preco Venda: {item?.preco_venda}</p>
              </div>
              <hr></hr>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ViewProdutos;
