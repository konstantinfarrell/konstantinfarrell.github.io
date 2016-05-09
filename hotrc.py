#!/usr/bin/python

import sys

class HotRC(object):
    ALL_ALIASES = dict()
    BASHRC = ''

    def __init__(self, *args, **kwargs):
        self.ALL_ALIASES = self.get_aliases()

    def get_info(self):
        """
        Parse the info file for `.bashrc` location
        or prompt the user for input.
        """
        try:
            info = open('info', 'r')
            self.BASHRC = info.readline()
            info.close()
        except IOError as e:
            info = open('info','w')
            print("Bashrc not found. Specify path to bashrc.")
            bashrc = str(raw_input('BASHRC_PATH: '))
            self.BASHRC = bashrc
            info.write(bashrc)
            info.close()

    def get_aliases(self):
        """
        Read all the aliases from the `.bashrc` file
        """
        self.get_info()
        contents = self.read_bashrc().split('\n')

        aliases = dict()
        for line in contents:
            if line.startswith('alias'):
                line = line.replace('alias ', '')
                definition = line.split('=')
                aliases[definition[0]] = definition[1]
        return aliases

    def create_alias(self, key, value):
        """
        Create a new alias and write it out to the `.bashrc` file
        """
        if value[0] is not "'" or value[0] is not '"':
            value = '"' + value + '"'
        try:
            if self.ALL_ALIASES[key] is not None:
                self.ALL_ALIASES[key] = value
        except KeyError:
            self.ALL_ALIASES[key] = value
            self.write_to_bashrc(key, value)

    def read_bashrc(self):
        """
        Read the entire `.bashrc` file.
        """
        return open(self.BASHRC, 'r').read()

    def remove_alias(self, key, value):
        """
        Remove an alias from the `.bashrc` file if it exists.
        """
        bashrc = self.read_bashrc()
        command = "alias "+str(key)+"=\""+str(value)+"\""
        if command in bashrc:
            bashrc = bashrc.replace(command, '')
        with open(self.BASHRC, 'w') as f:
            f.write(bashrc)

    def write_to_bashrc(self, key, value):
        """
        Format and write the key-value pair to the
        `.bashrc` file.
        """
        command = "alias "+str(key)+"="+str(value)
        with open(self.BASHRC, 'r') as file:
            contents = file.read()
            if "# HOTRC" not in contents:
                file.close()
                contents = open(self.BASHRC, 'a')
                contents.write("\n# HOTRC\n")
                contents.close()
                contents = self.read_bashrc()
        contents = contents.split('\n')
        d_range = self.get_index_range_of_definitions()
        contents.insert(d_range[1], command)
        contents = '\n'.join(contents)
        bashrc = open(self.BASHRC, 'w')
        bashrc.write(contents)

    def get_index_range_of_definitions(self):
        """
        Return the index of the `.bashrc` file where the
        HOTRC definitions begin and end.
        """
        bashrc = self.read_bashrc().split('\n')
        start = None
        end = None
        for line in bashrc:
            if line.startswith('# HOTRC'):
                start = bashrc.index(line)
                if start != len(bashrc):
                    end = bashrc[start:].index('') + start
                else:
                    start = end
        if start:
            return (start, end)
        else:
            start = len(bashrc)
            end = len(bashrc)
        return (start, end)

h = HotRC()
args = sys.argv[1:]

# Case 1: Create a new alias.
if args[0] == 'new':
    if len(args) > 1:
        h.create_alias(args[1], args[2])
    else:
        key = str(raw_input("Alias Key: "))
        value = str(raw_input("Alias Value: "))
        h.create_alias(key, value)
# Case 2: Remove an old alias.
elif args[0] == 'remove':
    if len(args) > 1:
        h.remove_alias(args[1], args[2])
    else:
        key = str(raw_input("Alias Key: "))
        value = str(raw_input("Alias Value: "))
        h.remove_alias(key, value)
# Case 3: List all defined aliases.
elif args[0] == 'list':
    print("\nAll Aliases")
    print("Key\tValue")
    print("===\t=====\n")
    for key, value in h.ALL_ALIASES.items():
        s = key + '\t' + value
        print(s)
    print('')
