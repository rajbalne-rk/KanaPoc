$(document).ready(function () {
    var url=""
    var components = new Vue({
        el: '#members',
        data: {
            membersList: {}
        },
        created: function () {
            var self = this;
            axios.get("https://frg6v92z6f.execute-api.us-east-1.amazonaws.com/test/members", {
                headers: { Pragma: 'no-cache' }
            })
                .then(function (response) {
                    components.membersList = response.data.membersList;
                })
                .catch(
                    function (response) {
                        if (isDebugMode())
                            console.log(response.data);
                    });
        },
        methods: {
            
        }

    });
});