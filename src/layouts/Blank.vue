<template>
    <v-app>
        <v-snackbar
            v-model="show_message"
            :color="message_type"        
            :multi-line="true"
            :timeout="6000"
            :top="true"
            icon="mdi-firework"            
        >
            {{ $t(message) }}
            <v-btn
                dark
                text
                v-on:click="show_message = false"
            >
                <i aria-hidden="true" class="v-icon notranslate mdi  mdi-close-circle theme--dark" ></i>
            </v-btn>
        </v-snackbar>        
        <router-view> </router-view>
    </v-app>
</template>

