//command: mkdir
if params.len != 1 or params[0] == "-h" or params[0] == "--help" then
	print(command_info("mkdir_usage"))
else
	computer = get_shell.host_computer
	pathFile = params[0]
	pathParent = parent_path(pathFile)
	existFile = computer.File(pathFile)
	
	if pathParent == pathFile then
		pathParent = current_path
	end if

	parent = computer.File(pathParent)
	if parent == null then
		print("mkdir: " + pathParent + " not found")

	else if existFile != null then
		print("mkdir: " + existFile.path + " file exists")

	else if not parent.has_permission("w") then
		print("mkdir: permission denied")

	else
		arrayPath = pathFile.split("/")
		output = computer.create_folder(parent.path, arrayPath[arrayPath.len - 1])
		if output != null and output != 1 then
			print(output)
		end if 

	end if
end if
