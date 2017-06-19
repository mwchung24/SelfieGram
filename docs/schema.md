# Schema Information

## users
| column name | data type | details |
| --- | --- | --- |
| id | integer | not null, primary key, unique |
| username | string | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique|
| name | string | |
| description | text | |
| profile_pic | string | |

## photos

## likes

## comments

## follows
