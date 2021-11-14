# Angular Life Cycle Hooks

The hooks give you the opportunity to act on a component or directive instance at the appropriate moment, as Angular creates, updates, or destroys that instance.

Called in below order

** Be very careful when using these hooks - DoCheck **

OnChanges

    Respond when Angular sets or resets data-bound input properties

OnInit

    When the component comes first into the DOM
    (ngIf) and hidden will show the difference in behavior when applied to hello component

DoCheck
    Detect and act upon changes that Angular can't or won't detect on its own.

AfterViewInit
Respond after Angular initializes the component's views and child views, or the view that contains the directive.

AfterViewChecked
  Respond after Angular checks the component's views and child views, or the view that contains the directive.

OnDestroy

  Cleanup of subscriptions, events, intervals to prevent memory leakage

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-8hsgwn)
