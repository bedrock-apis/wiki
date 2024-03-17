---
displayName: Tags Info
---

- <Tag>js</Tag>

    What people often run into when starting out with Minecraft Scripting is the problem with timing, the standards for timing code as you may have noticed are the `setTimeout` and `setInterval` functions and their cancel functions.

    These standardized methods are used by the frame system where you can set the delay to millisecond precision, but minecraft uses a tick to process changes in the world, right? That's why even these methods are not and will not be available, instead we got the [`system.runTimeout`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system#runtimeout) and [`system.runInterval`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system#runinterval) system methods from version 1.19.70, which delay to the precision of one tick, you can read more about on [Microsoft Docs](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system) or [Wiki Tutorial](/scripting/script-server#scheduling)

- <Tag>ts</Tag>

    Not everyone can encounter this problem because the use of eval and Function method for running code in string format is not great.

    Some browsers also prohibit the use of these methods, mainly the eval method, when using eval there is a risk of malicious code that can harm the problem in your add-on, which is why it is disabled by default.

    To enable these methods that evaluate code, you must mention it in the manifest. What and how you can find here. [Start with Script API](/scripting/starting-scripts).

- <Tag>depracated</Tag>

    Some objects passed to us by the API have their own native handle, in some cases these objects are released before the javascript object is released, which then results in an error being reported when calling native methods, Native object bound to prototype doesn't exist.
    That means the only function you called with a non-natively released object, the function tries to find a native handle on an object that is no longer there.
    You will encounter this most often when using events, because in every data events are natively released after the event ends, therefore you cannot save the object that was given by the event; if you have a player object, after the player leaves, the native handle of the object is released and you can no longer call the methods and properties of the object that used to be the player.

- <Tag>experimental</Tag>

    Some objects passed to us by the API have their own native handle, in some cases these objects are released before the javascript object is released, which then results in an error being reported when calling native methods, Native object bound to prototype doesn't exist.
    That means the only function you called with a non-natively released object, the function tries to find a native handle on an object that is no longer there.
    You will encounter this most often when using events, because in every data events are natively released after the event ends, therefore you cannot save the object that was given by the event; if you have a player object, after the player leaves, the native handle of the object is released and you can no longer call the methods and properties of the object that used to be the player.


- <Tag>pseudo</Tag>

    Some objects passed to us by the API have their own native handle, in some cases these objects are released before the javascript object is released, which then results in an error being reported when calling native methods, Native object bound to prototype doesn't exist.
    That means the only function you called with a non-natively released object, the function tries to find a native handle on an object that is no longer there.
    You will encounter this most often when using events, because in every data events are natively released after the event ends, therefore you cannot save the object that was given by the event; if you have a player object, after the player leaves, the native handle of the object is released and you can no longer call the methods and properties of the object that used to be the player.