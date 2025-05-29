pipeline {
  agent any

  environment {
    // Correct path to your Node.js binary (not just npm)
    NODE_BIN = "/Users/nandhinidevaraj/.nvm/versions/node/v20.19.2/bin"
    PATH = "${NODE_BIN}:${PATH}"
  }

  stages {
    stage('Checkout Code') {
      steps {
        git credentialsId: 'e9d56be8-412a-41a2-90e3-7cc3b27817f9',
            url: 'https://github.com/nandhid/CypressSauceDemo.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Tests and Generate Reports') {
      steps {
        sh 'chmod +x run-tests.sh && ./run-tests.sh'
      }
    }

    stage('Archive Mochawesome Report') {
      steps {
        archiveArtifacts artifacts: 'mochawesome-report/mochawesome.html', allowEmptyArchive: true
      }
    }

    stage('Archive Allure Report') {
      steps {
        allure includeProperties: false,
               jdk: '',
               reportBuildPolicy: 'ALWAYS',
               results: [[path: 'allure-results']]
      }
    }
  }

  post {
    success {
      echo '✅ Build succeeded.'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}
