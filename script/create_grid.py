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
for filename in glob.glob('data/*/*.csv'):
    with open(filename, 'r') as f:
        name = filename.split('\\')[2].split('-')[0]
        age = filename.split('-')[1]
        language = filename.split('-')[2]
        users.append((name, age, language))
        reader = csv.reader(f, delimiter=',')
        user_data = []
        first = True
        for row in reader:
            if first:
                first = False
                continue
            user_data.append(row)
        data.append(user_data)


user_datas = []

for i in range(len(data)):
    user_data = {}

    labels_message = []
    labels_grid = []

    user_data['Name'] = users[i][0]
    user_data['Age'] = users[i][1]
    user_data['Language'] = users[i][2]
    if data[i][0][part_index] == 'Instruction':
        user_data['Group'] = 'IPS'
    else:
        user_data['Group'] = 'PSI'

    instruction_times = np.array([])
    grids = []
    grid_times = np.array([])
    for row in data[i]:
        if row[part_index].lower() == 'instruction':
            if row[timespent_index] != '':
                instruction_times = np.append(instruction_times, float(row[timespent_index]))
        elif row[part_index].lower() == 'assessment':
            user_data['Assessment message ' + row[slide_index]] = row[message_index]
            user_data['Assessment grid ' + row[slide_index]] = row[gridstring_index]
        else:
            user_data['Message ' + row[slide_index]] = row[message_index]
            user_data['Grid ' + row[slide_index]] = row[gridstring_index]
            if row[timespent_index] != '':
                grid_times = np.append(grid_times, float(row[timespent_index]))

    avg_instruction_time = round(np.mean(instruction_times))
    avg_grid_time = round(np.mean(grid_times))
    total_instruction_time = round(np.sum(instruction_times))
    total_grid_time = round(np.sum(grid_times))

    user_data['Average time spent on instructions'] = avg_instruction_time
    user_data['Average time spent on problem solving'] = avg_grid_time
    user_data['Total time spent on instructions'] = total_instruction_time
    user_data['Total time spent on problem solving'] = total_grid_time

    user_datas.append(user_data)

# add every different key from the user_datas to labels
labels = []
for user_data in user_datas:
    for key in user_data.keys():
        if key not in labels:
            labels.append(key)

# sort labels alphabetically and put all the message and grid labels at the end
labels_message = []
labels_grid = []
labels_standard = []
for label in labels:
    if 'message' in label.lower():
        labels_message.append(label)
    elif 'grid' in label.lower():
        labels_grid.append(label)
    else:
        labels_standard.append(label)
labels_message.sort()
labels_grid.sort()
labels = labels_standard + labels_message + labels_grid


rows = []
for user_data in user_datas:
    row = []
    for label in labels:
        if label in user_data:
            row.append(twp.fill(str(user_data[label]), 20))
        else:
            row.append('')
    rows.append(row)



for i in range(len(labels)):
    labels[i] = twp.fill(labels[i], 20)

print(len(rows[0]))
print(len(labels))

plt.figure(figsize=(100, 50))
table = plt.table(cellText=rows, loc='center', colLabels=labels, cellLoc='center')
table.auto_set_font_size(False)
table.set_fontsize(8)
table.scale(1.2, 8)
plt.axis('off')
plt.savefig('table.png', dpi=100)
# plt.show()



