# pets

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Tue Mar 24 2020 11:31:11 GMT+0700 (Indochina Time) using Sails v1.2.4.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

"# sails-pets-crud"

## Usage

### createPet API: 'post /createPet'
body {
  name: NameOfPet
}
--> Create a pet

### getAllPet: 'get /pet/all-pet'
--> return all pets in DB

### findPetById API: 'get /pet/{petId}'
petId = params.petId
--> Return a pet by id

### updatePet API: 'put /pet/{petId}'
petId = params.petId
--> Update name or imagelink of pet

### uploadPetImage API: 'post /pet/{petId}/uploadImage'
#### petId = params.petId
#### image = file('image')
--> Update imagelink of pet

### deletePet API: 'delete /pet/{petId}'
petId = params.petId
--> Delete a pet by id
