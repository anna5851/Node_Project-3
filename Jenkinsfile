pipeline {
  agent any
  stages{
    stage("checkout"){
      steps{
        checkout scm
      }
    }
    stage("build"){
      steps{
        sh 'docker build -t my_node_app:1.0 .'
      }
    }
    stage("Docker Push"){
      steps{
        withCredentials([usernamePassword(credentialsId:'docker_cred', passwordVariable:'DOCKERHUB_PASSWORD', usernameVariable:'DOCKERHUB_USERNAME')]) {
          sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
          sh 'docker tag my_node_app:1.0 anna5851/nodejs-project-3:3.0'
          sh 'docker push anna5851/nodejs-project_3:1.1'
          sh 'docker logout'
        }
      }
    }
  }
}
