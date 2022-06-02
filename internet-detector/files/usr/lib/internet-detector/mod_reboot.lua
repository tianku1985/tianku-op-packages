
local nixio  = require("nixio")

local Module = {
	name             = "mod_reboot",
	config           = {},
	syslog           = function(level, msg) return true end,
	writeValue       = function(filePath, str) return false end,
	readValue        = function(filePath) return nil end,
	deadPeriod       = 0,
	forceRebootDelay = 0,
	_deadCounter     = 0,
}

function Module:rebootDevice()
	self.syslog("warning", string.format("%s: reboot", self.name))
	os.execute("/sbin/reboot &")

	if self.forceRebootDelay > 0 then
		nixio.nanosleep(self.forceRebootDelay)
		self.syslog("warning", string.format("%s: force reboot", self.name))
		self.writeValue("/proc/sys/kernel/sysrq", "1")
		self.writeValue("/proc/sysrq-trigger", "b")
	end
end

function Module:init(t)
	self.deadPeriod       = tonumber(t.dead_period)
	self.forceRebootDelay = tonumber(t.force_reboot_delay)
end

function Module:run(currentStatus, lastStatus, timeDiff)
	if currentStatus == 1 then
		if self._deadCounter >= self.deadPeriod then
			self:rebootDevice()
			self._deadCounter = 0
		else
			self._deadCounter = self._deadCounter + timeDiff
		end

	else
		self._deadCounter = 0
	end
end

return Module
