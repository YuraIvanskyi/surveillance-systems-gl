<template>
    <v-card outlined>
        <v-data-table dense
        :items-per-page=15
        :headers="headers"
        :items="services"
        :search="search">
            <template v-slot:[`item.img`]="{ item }">
                <v-img :src="item.img" height="60" width="100" :alt="item.img"></v-img>
            </template>

            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title class="my-0">
                        <v-avatar class="mr-4 mt-0">
                            <v-icon size="46" color="primary">mdi-wrench-outline</v-icon>
                        </v-avatar>Services Editor
                    </v-toolbar-title>

                    <div class="flex-grow-1"></div>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on: createItem }">
                            <v-btn color="primary" text class="mb-2" v-on="createItem">
                                <v-icon class="mx-2" color="primary">mdi-plus</v-icon>
                                Add new service
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
                                    label="Service full name (should be exactly like in scripts)"/>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="pa-0" md="12">
                                        <v-text-field v-model="editedItem.project"
                                        label="Project tag which this service belongs to"/>
                                    </v-col>
                                    <v-combobox
                                    v-model="editedItem.platform"
                                    :items="platforms"
                                    label="Platform"/>
                                    <v-col cols="12" sm="4" class="pa-0" md="12">
                                        <v-text-field v-model="editedItem.rythm"
                                        label="Rythm of service tests"/>
                                    </v-col>
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
import { createService, deleteService } from '../logic/services';
import { services } from '../main';

export default {
  methods: {
    editItem(item) {
      this.editedIndex = this.services.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
      this.isNew = false;
    },
    deleteItem(item) {
      deleteService(item.uid);
    },
    createItem() {
      this.dialog = true;
      this.isNew = true;
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
        createService(edited);
      } else {
        // this is a case since the node name does not change via edit, but it matters
        deleteService(edited.uid);
        createService(edited);
      }
      this.close();
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? 'New Service'
        : 'Edit Service';
    },
  },
  watch: {
    dialog(val) {
      return val || this.close();
    },
  },
  data: () => ({
    dialog: false,
    isNew: true,
    services,
    platforms: ['IOS', 'Android', 'Windows'],
    search: '',
    headers: [
      {
        text: 'Service',
        value: 'name',
        sortable: true,
        align: 'start',
      },
      {
        text: 'Project',
        value: 'project',
        sortable: true,
        align: 'center',
      },
      {
        text: 'Platform',
        value: 'platform',
        sortable: true,
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
      platform: '',
      rythm: '',
      project: '',
    },
    defaultItem: {
      name: '',
      platform: '',
      rythm: '',
      project: '',
    },
  }),
};
</script>
