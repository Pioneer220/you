import {} from "./telegram-web-app.js";
function legacyCopy(value) {
    const ta = document.createElement('textarea')
    ta.value = value ?? ''
    ta.style.position = 'absolute'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  



const scriptsInEvents = {

	async EventScore_Event2(runtime, localVars)
	{
		
	},

	async EventScore_Event3_Act3(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

