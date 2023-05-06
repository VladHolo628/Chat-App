export class userDataSender {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  async sendAuthRequest() {
    const request = await fetch("https://edu.strada.one/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: this.email }),
    });
    const response = await request.json();

    return response;
  }
}
