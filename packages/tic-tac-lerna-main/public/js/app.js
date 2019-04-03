(function(axios, React, ReactDOM) {
    class GridList extends React.Component {
        render() {
            return (
                <div>
                    <h3>Available grids:</h3>
                    {
                        this.props.grids.length ?
                            this.props.grids.map(grid => (<p>{grid.name}</p>)) :
                            <p>No results found</p>
                    }
                </div>
            );
        }
    }

    axios.get('/grids')
        .then(response => {
            const grids = response.data;
            ReactDOM.render(
                <GridList grids={grids} />,
                document.getElementById('app')
            );
        });
})(axios, React, ReactDOM);