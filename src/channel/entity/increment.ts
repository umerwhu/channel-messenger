export class Increment {
    private nextID = 0;
    incrementId() {
      this.nextID++;
      return this.nextID;
    }
  }
  