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
        sh 'docker build -t my.node.app:1.0 .'
      }
    }
  }
}
