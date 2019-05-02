var GistBox = React.createClass({

    getInitialState: function() {
        return {
            gists: [{username: 'sarkarsusmita', url: 'http://www.google.com'}]
        }
    },

    addGist: function(username) {
        var url = `https://github/api/users/${username}/gists`;

        $.get(url, function(result){
            // console.log(result);
            var username= result[0].owner.login;
            var url = result[0].html_url;
            
            var gists = this.state.gists.concat({ username, url });

            this,setStates({ gists });
        }.bind(this));
    },

    render: function() {
        
        var newGist = function(gist) {
            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div>
                <h1>GistBox</h1>

                <GistAddForm onAdd={this.addGist} />
                
                {this.state.gists.map(newGist)}
            </div>
        )
    }

});

React.render(<GistBox />, document.querySelector('#app'));