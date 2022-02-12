<template>
    <div class="wrapper-users">
        <h1>Пользователи</h1>
        <div class="users">
            <div class="user" v-for="user in users" :key="user.id">
                <div>
                    <p>{{user.name}}</p>
                    <p>{{user.email}}</p>
                </div>
                <button @click="handleGoUserPage(user.id)">Страница пользователя </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {

    mounted() {
        this.fetchUsers()
    },

    methods: {
        ...mapActions(['fetchUsers']),


        handleGoUserPage(id) {
            console.log(id)
            this.$router.push(`/${id}`)
        }
    },
    computed: {
        ...mapState({
            users: state => state.users
        })
    }

}
</script>

<style scoped>
    .wrapper-users {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


    .users {
        width: 700px;
        max-height: 500px;
        overflow-y: auto;
        background: white;
        padding: 15px;
        border-radius: 10px;
        
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }


    .users::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .users::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
    }

    .users::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }

    .user {
        width: 100%;
        border: 3px solid #b3b3b37e;
        padding: 10px 25px;
        border-radius: 10px;
        
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .user p {
        margin: 0;
    }

    .user:nth-child(n+2) {
        margin-top: 25px;
    }

    button {
        padding: 10px;
        outline: none;
        border-radius: 5px;
        background: #510cabab;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background: #510cab;
        transition: .4s;
    }



    /* M E D I A */

    @media screen and (max-width: 700px) {
        .users {
            width: 85%;
        }

        .user {
            
            flex-wrap: wrap;
        }
    }
</style>