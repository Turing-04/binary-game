import csv23
import glob
from matplotlib import pyplot as plt
from matplotlib import colors
import numpy as np
import textwrap as twp
from matplotlib import rc

time_index = 0
timespent_index = 3
part_index = 4
message_index = 7
slide_index = 8
height_index = 9
id_index = 10
width_index = 11
gridstring_index = 12

data = []
users = []



for filename in glob.glob('data/*/*.csv'):
    with open(filename, 'r') as f:
        name = filename.split('\\')[2].split('-')[0]
        name = '#####'
        age = filename.split('-')[1]
        language = filename.split('-')[2]
        users.append((name, age, language))
        with csv23.open_reader(f.name) as csvreader:
            user_data = []
            first = True
            for row in csvreader:
                if first:
                    first = False
                    continue
                user_data.append(row)
            data.append(user_data)


user_datas = []


num_ips = 0
num_psi = 0

for i in range(len(data)):
    user_data = {}

    labels_message = []
    labels_grid = []

    user_data['Name'] = users[i][0]
    user_data['Age'] = users[i][1]
    user_data['Language'] = users[i][2]
    if data[i][0][part_index] == 'Instruction':
        user_data['Group'] = 'IPS'
        num_ips += 1
    else:
        user_data['Group'] = 'PSI'
        num_psi += 1

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


print(f'PSI: {num_psi}')
print(f'IPS: {num_ips}')


labels = []
for user_data in user_datas:
    for key in user_data.keys():
        if key not in labels:
            labels.append(key)


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

def make_matrix(gridstring, split):
    # make a new string going back to line after every 5 characters
    result = ''
    result += '_' * (2 * split + 1) + '\n'
    result += '|'
    for i in range(len(gridstring)):
        if i % split == 0 and i != 0:
            result += '|\n|'
        result += gridstring[i]
    result += '|'
    # replace the 0's with spaces
    result = result.replace('0', '  ')
    # replace the 1's with █
    result = result.replace('1', '██')

    # for the last line of result, replace ' ' with '_'
    last_line = result.split('\n')[-1]
    last_line = last_line.replace(' ', '_')

    # remove last line and add the new one
    result = result.split('\n')
    result[-1] = last_line
    result = '\n'.join(result)


    return result



rows = []
for user_data in user_datas:
    row = []
    for label in labels:
        if label in user_data:
            # if row is a grid
            if 'grid' in label.lower():
                split = 0
                length = len(user_data[label])
                if length == 30:
                    split = 6
                elif length == 64:
                    split = 8
                else:
                    split = length
                row.append(make_matrix(user_data[label], split))
            else:
                row.append(twp.fill(str(user_data[label]), 40))
        else:
            row.append('')
    rows.append(row)



for i in range(len(labels)):
    labels[i] = twp.fill(labels[i], 40)

# remove columns 8, 13, 15, 17, 18, 19, 22, 23, 25, 27, 29, 30, 31, 32, 33, 34, 36, 38, 39, 42, 43, 46, 48, 50
labels = [labels[i] for i in range(len(labels)) if i not in [8, 13, 15, 17, 18, 19, 22, 23, 25, 27, 29, 30, 31, 32, 33, 34, 36, 38, 39, 42, 43, 46, 48, 50]]
rows = [[row[i] for i in range(len(row)) if i not in [8, 13, 15, 17, 18, 19, 22, 23, 25, 27, 29, 30, 31, 32, 33, 34, 36, 38, 39, 42, 43, 46, 48, 50]] for row in rows]

print(len(rows[0]))
print(len(labels))

plt.rcParams["font.family"] = "Consolas"

plt.figure(figsize=(100, 50))
table = plt.table(cellText=rows, loc='center', colLabels=labels, cellLoc='center')

table.auto_set_font_size(False)
table.set_fontsize(8)

table.scale(1.2, 8)
plt.axis('off')
plt.savefig('table_old.png', dpi=150)



