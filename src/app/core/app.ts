
export class App {
  private static instance: App;
  private constructor() {};

  static getInstance(): App {
    if(!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  public readonly message = 'Hello world!';
}