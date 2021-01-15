<template>
    <v-card outlined>
        <v-data-table dense :items-per-page=10 :headers="headers" :items="projects">
            <template v-slot:[`item.img`]="{ item }">
                <v-img :src="item.img" height="60" width="100" :alt="item.img"></v-img>
            </template>

            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>
                        <v-avatar class="mr-4">
                            <v-icon size="46" color="primary">mdi-gamepad-variant</v-icon>
                        </v-avatar>Projects Editor
                    </v-toolbar-title>

                    <div class="flex-grow-1"></div>
                    <v-dialog v-model="dialog" max-width="700px">
                        <template v-slot:activator="{ on: createItem }">
                            <v-btn color="primary" text class="mb-2" v-on="createItem">
                                <v-icon class="mx-2" color="primary">mdi-plus</v-icon>
                                Add new project
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                <v-row>
                                    <v-col cols="12" sm="4" class="pa-0" md="12">
                                        <v-text-field v-model="editedItem.name"
                                        label="Project full name"/>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="pa-0" md="12">
                                        <v-text-field v-model="editedItem.tag"
                                        label="Project tag"/>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="pa-0" md="12">
                                        <v-text-field v-model="editedItem.img"
                                        label="Project image path (leave empty for default)"/>
                                    </v-col>
                                    <v-color-picker
                                        v-model="editedItem.color"
                                        class="ma-2"
                                        width="700"
                                        swatches-max-height="100"
                                        show-swatches
                                        hide-canvas
                                        hide-inputs/>
                                </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn color="primary" text @click="close">Cancel</v-btn>
                                <v-btn color="primary" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
          </template>

          <template v-slot:[`item.action`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>

        </v-data-table>
    </v-card>
</template>
<script>
import { createProject, deleteProject, editProject } from '../logic/projects';
import { projects } from '../main';

export default {
  methods: {
    deleteProject,
    createProject,
    editItem(item) {
      this.editedIndex = this.projects.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
      this.isNew = false;
    },
    createItem() {
      this.dialog = true;
      this.isNew = true;
    },
    deleteItem(item) {
      deleteProject(item.uid);
    },
    close() {
      this.dialog = false;
      this.isNew = false;
      setTimeout(() => {
        this.editedItem = {
          ...this.defaultItem,
        };
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      const edited = this.editedItem;
      if (this.isNew) {
        createProject(edited);
      } else {
        editProject(edited);
      }
      this.close();
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? 'New Project'
        : 'Edit Project';
    },
  },
  watch: {
    dialog(val) {
      return val || this.close();
    },
  },
  data: () => ({
    dialog: false,
    isNew: false,
    projects,
    headers: [
      {
        text: 'Project',
        value: 'name',
        sortable: false,
        align: 'start',
      },
      {
        text: 'Tag',
        value: 'tag',
        sortable: false,
        align: 'center',
      },
      {
        text: 'Image',
        value: 'img',
        sortable: false,
        align: 'center',
      },
      {
        text: 'Actions',
        value: 'action',
        sortable: false,
        align: 'center',
      },
    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      tag: '',
      color: '',
      img: '',
    },
    defaultItem: {
      name: '',
      tag: '',
      color: '',
      img: '',
    },
  }),
};
</script>
