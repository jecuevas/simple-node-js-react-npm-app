pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
        HOME = '.'
    } 
    stages {
    //      node('jenkins-prb'){
        stage('Build') { 
            node('jenkins-prb') {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            node('jenkins-prb') {
                sh './jenkins/scripts/test.sh' 
            }
        }
        stage('Deliver') {
            node('jenkins-prb') {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }

    // }
    } 
}
