import Reminder from "./Reminder";

/**
 * A grouping of reminders based on tag (case-insensitive)
 */
export interface RemindersGroupingByTag {
  [tag: string]: Reminder[];
}

/**
 * @class RemindersHandler
 * @description Represents a handler that manages a list of reminders
 */
export default class RemindersHandler {
  private _reminders: Reminder[];

  /**
   * Creates a new RemindersHandler instance with no reminders.
   */
  constructor() {
    this._reminders = [];
  }

  /**
   * Returns the list of reminders added so far.
   */
  public get reminders(): Reminder[] {
    return this._reminders;
  }

  /**
   * Creates a new reminder and adds it to list of reminders.
   * @param description - The full description of reminder
   * @param tag - The keyword used to help categorize reminder
   */
  public addReminder(description: string, tag: string): void {
    // throw new Error("Not yet implemented");
    this._reminders.push(new Reminder(description, tag));
  }

  /**
   * Returns the reminder at specified index.
   * @throws ReminderError if specified index is not valid
   * @param index - The index of the reminder
   */
  public getReminder(index: number): Reminder {
    return this._reminders[index];
  }

  /**
   * Returns true if specified index is valid, false otherwise.
   * @param index - The position of the reminder in list of reminders
   */
  public isIndexValid(index: number): boolean {
    if (this.size() === 0) return false;
    if (index < 0 || index + 1 > this.size()) return false;
    return true;
  }

  /**
   * Returns the number of reminders added so far.
   */
  public size(): number {
    return this._reminders.length;
  }

  /**
   * Modifies the description of the reminder at a specified index.
   * Silently ignores call if index is not valid.
   * @param index - The index of the reminder
   * @param description - The full description of reminder
   * @param tag - The keyword used to help categorize reminder
   */
  public modifyReminder(index: number, description: string): void {
    this._reminders[index - 1].description = description;
  }

  /**
   * Toggle the completion status of the reminder at specified index.
   * Silently ignores call if index is not valid.
   * @param index - The index of the reminder
   */
  public toggleCompletion(index: number): void {
    this._reminders[index - 1].toggleCompletion();
  }

  /**
   * Returns a list of reminders that match the keyword
   * All reminders with tags that match the search keyword exactly will be returned first.
   * If none exist, then all reminders with descriptions that match the search keyword (even partially)
   * are returned.
   * @param keyword - Text to search for in description and tag
   */
  public search(keyword: string): Reminder[] {
    let resultArray = this.searchTags(keyword);
    if (resultArray.length === 0) {
      resultArray = this.searchDescriptions(keyword);
    }
    return resultArray;
  }

  /**
   * Returns a grouping of the reminders based on tag (case-insensitive).
   */
  public groupByTag(): RemindersGroupingByTag {
    const groupings: RemindersGroupingByTag = {};

    /* Pseudocode:
        You must group the reminders by tags. 
        So you need to take this._reminders which is currently like so:

        [{reminder1}, {reminder2}, {reminder3}, {reminder4}]
        
        And transform it into a groupings object
        like this:

        {
            "coding": [{ reminder1 }, { reminder2 }],
            "grocery": [{ reminder3 }, { reminder4 }],
        }

        */

    for (const reminder of this._reminders) {
      if (!Object.keys(groupings).includes(reminder.tag)) {
        groupings[reminder.tag] = [reminder];
      } else {
        groupings[reminder.tag].push(reminder);
      }
    }

    return groupings;
  }

  /**
   * Returns a list of reminders with tags that match the keyword exactly.
   * @param keyword - Text to search for in description and tag
   */
  private searchTags(keyword: string): Reminder[] {
    return this._reminders.filter((data) => data.tag === keyword);
  }

  /**
   * Returns a list of reminders with descriptions that match the keyword.
   * @param keyword - Text to search for in description and tag
   */
  private searchDescriptions(keyword: string): Reminder[] {
    return this._reminders.filter((data) => data.description.includes(keyword));
  }
}
