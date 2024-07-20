# BoolzApp - Vue Messaging Application

BoolzApp is a Vue.js messaging application that simulates chat conversations. Users can view and send messages, receive automated responses, and search through contacts.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Project Structure](#project-structure)
6. [Components](#components)
7. [License](#license)

## Overview

BoolzApp is a single-page application built with Vue.js. It allows users to interact with pre-defined contacts, send messages, and receive automated responses. The application features a search bar to filter contacts and a responsive design.

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run serve
    ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:8080`. You will see the BoolzApp interface, where you can:

- View contacts and their messages.
- Send new messages.
- Receive automated responses.
- Search for contacts using the search bar.

## Features

- **Real-time Messaging**: Send and receive messages in real-time.
- **Automated Responses**: Receive pre-defined automated responses.
- **Contact Search**: Filter contacts by name using the search bar.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Project Structure

- **`src/components`**: Contains all Vue components
- **`src/assets`**: Contains static assets like images and styles
- **`src/store.js`**: Contains the Vuex store for managing state

## Components

### Left Column

#### `LeftHeader.vue`
Displays the header of the left column with user avatar and icons.

#### `NotificationBar.vue`
Shows notification settings for new messages.

#### `SearchBar.vue`
Contains the search input to filter contacts.

#### `ContactList.vue`
Displays the list of contacts with their latest message and timestamp.

### Right Column

#### `RightHeader.vue`
Displays the header of the right column with the selected contact's information.

#### `MessageContainer.vue`
Shows the chat messages between the user and the selected contact.

#### `MessageInput.vue`
Contains the input field for writing and sending new messages.

### Message Pop-up Menu

#### `MessagePopUp.vue`
Displays options for each message, such as viewing message info and deleting the message.

## Main Script

The main script initializes the Vue app, defines data properties, and methods for sending messages, receiving automated responses, and handling contact search.

```javascript
const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                // Define contacts with messages here
            ],
            messageInput: "",
            popUp: false,
            popUpIndex: 0,
            searchInput: "",
            controll: 0,
            statusTxt: "ultimo accesso",
            timeDate: luxon.DateTime.now().setLocale('it').toLocaleString(luxon.DateTime.TIME_SIMPLE),
        }
    },
    methods: {
        sendMessage() {
            // Send message logic
        },
        autoAnswer() {
            // Automated response logic
        },
        autoAnswerTimer() {
            setTimeout(this.autoAnswer, 1000)
        },
        deleteMsg(index) {
            // Delete message logic
        },
        statusTimer() {
            setTimeout(this.writingStatus, 300);
            setTimeout(this.onlineStatus, 1300);
            setTimeout(this.offlineStatus, 2300);
        },
        writingStatus() {
            this.statusTxt = "sta digitando";
        },
        onlineStatus() {
            this.statusTxt = "è online";
        },
        offlineStatus() {
            this.statusTxt = "ultimo accesso";
        },
        searchBar() {
            this.contacts.forEach(curName => {
                curName.visible = curName.name.toLowerCase().includes(this.searchInput.toLowerCase());
            });
        },
        resetSearchBar() {
            this.contacts.forEach(curName => {
                curName.visible = true;
            });
        }
    },
}).mount('#app')
