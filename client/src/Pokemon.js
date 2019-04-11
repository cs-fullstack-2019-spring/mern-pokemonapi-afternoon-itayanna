import React, { Component } from 'react';




class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{results:[]},
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
            .then(data=>data.json())
            .then(data=>this.setState({data:data}));
    }

    render(){
        let dataMap = this.state.data.results.map(
            (allPokemon,index)=>{
                return(
                    <table className='table'>
                        <td>
                            <img src={'./pokemon/' + index + '.png'} alt={allPokemon.name}/>

                        </td>
                        <td>
                            <p> {allPokemon.name}</p>

                        </td>
                    </table>

                    )


            }
        );
        return(
            <div>
                {dataMap}
            </div>
        );
    }
}
export default Pokemon;
