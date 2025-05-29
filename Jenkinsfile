pipeline {
  agent any

  environment {
    // Optional: ensure correct Node version via nvm or toolchain
    PATH = "/usr/local/bin:$PATH"
  }

  stages {
    stage('Checkout Code') {
      steps {
        git url: 'https://github.com/nandhid/CypressSauceDemo.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Tests and Generate Reports') {
      steps {
        sh './run-tests.sh'
      }
    }

    stage('Archive Mochawesome Report') {
      steps {
        archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
        publishHTML([
          reportDir: 'mochawesome-report',
          reportFiles: 'mochawesome.html',
          reportName: 'Mochawesome Report',
          alwaysLinkToLastBuild: true,
          keepAll: true
        ])
      }
    }

    stage('Archive Allure Report') {
      steps {
        archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      echo '✅ Build completed'
    }
    failure {
      echo '❌ Build failed'
    }
  }
}
