module.exports = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": "00121bbd92846143cb2fc56081d7ccd16a25fbb0",
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": "110888225793077067746",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x3x30%40senai-overflow-2077.iam.gserviceaccount.com"
};

  