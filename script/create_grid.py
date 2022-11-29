import csv
import glob
from matplotlib import pyplot as plt
from matplotlib import colors
import numpy as np
import textwrap as twp

# time,currentactivity,cause,timespent,part,uuid,nextactivity,message,slide,height,id,width,gridString
time_index = 0
timespent_index = 3
part_index = 4
message_index = 7
slide_index = 8
height_index = 9
id_index = 10
width_index = 11
gridstring_index = 12

# load all csv files in data
data = []
users = []
for filename in glob.glob('data/*.csv'):
    with open(filename, 'r') as f:
        name = filename.split('\\')[1].split('-')[0]
        age = filename.split('-')[1]
        language = filename.split('-')[2]
        users.append((name, age, language))
        reader = csv.reader(f)
        user_data = []
        first = True
        for row in reader:
            if first:
                first = False
                continue
            user_data.append(row)
        data.append(user_data)


# plot = plt.plot(figsize=(10, 150))

rows = []
labels = []

first = True
for i in range(len(data)):
    

    labels_message = []
    labels_grid = []

    user_data = data[i]
    name = users[i][0]
    age = users[i][1]
    language = users[i][2]
    instruction_times = np.array([])
    messages = []
    grids = []
    grid_times = np.array([])
    for row in user_data:
        if row[part_index] == 'Instruction':
            x = 4
            # instruction_times = np.append(instruction_times, float(row[timespent_index]))
        else:
            if row[message_index] != '':
                messages.append(row[message_index])
                labels_message.append('Message ' + row[slide_index])
            if row[gridstring_index] != '':
                grids.append(row[gridstring_index])
                labels_grid.append('Grid ' + row[slide_index])
                # grid_times = np.append(grid_times, float(row[timespent_index]))

    avg_instruction_time = 0 # np.mean(instruction_times)
    avg_grid_time = 0 # np.mean(grid_times)

    # display name, age, language, avg instruction time, messages, avg grid time, grids in a table
    row = []
    row.append(name)
    row.append(age)
    row.append(language)
    row.append(avg_instruction_time)
    row.append(avg_grid_time)
    for message in messages:
        row.append(twp.fill(message, 20))
        
    for grid in grids:
        row.append(twp.fill(grid, 20))

    rows.append(row)
    
    if first:
        labels.append('Name')
        labels.append('Age')
        labels.append('Language')
        labels.append(twp.fill('Average Time Spent on Instructions', 20))
        labels.append(twp.fill('Average Time Spent on Grids', 20))
        for label in labels_message:
            labels.append(label)
        for label in labels_grid:
            labels.append(label)

    first = False

# make each element in rows the same length
max_length = 0
for row in rows:
    if len(row) > max_length:
        max_length = len(row)

for row in rows:
    while len(row) < max_length:
        row.append('')

plt.figure(figsize=(100, 50))
table = plt.table(cellText=rows, loc='center', colLabels=labels, cellLoc='center')
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1.2, 8)
plt.axis('off')
plt.savefig('table.png', dpi=100)
# plt.show()



