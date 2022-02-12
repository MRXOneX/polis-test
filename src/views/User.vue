<template>
    <div class="user">
        <div class="info-user">
            <p>
               <span class="tags">ID:</span> {{user.id}}
            </p>
            <p>
               <span class="tags">NAME:</span> {{user.name}}
            </p>
            <p>
               <span class="tags">USERNAME:</span> {{user.username}}
            </p>
            <p>
               <span class="tags">EMAIL:</span> {{user.email}}
            </p>
            <p>
               <span class="tags">WEBSITE:</span> {{user.website}}
            </p>
        </div>
        <button @click="$router.push('/')">Назад</button>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";



export default {
    mounted() {
        this.fetchUser({id: this.$route.params.id})
    },


    methods: {
        ...mapActions(['fetchUser']),
    },

    computed: {
        ...mapState({
            user: state => state.user
        })
    }
}
</script>

<style scoped>
    .user {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        font-size: 24px
    }

    .info-user {
        background: white;
        padding: 15px 25px;
        border-radius: 10px;
        
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }

    .tags {
        font-weight: 600;
    }

    button {
        margin-top: 30px;

    }


    /* M E D I A */

    @media screen and (max-width: 400px){
        .user {
            font-size: 18px
        }
    }
</style>