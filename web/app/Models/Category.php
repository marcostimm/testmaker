<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Category extends Model
{
    /**
     * Fillable fields for a Category
     *
     * @var array
     */

    protected $fillable = [
        'name',
        'slug'
    ];

    public function setNameAttribute($value)
    {
        $this->attributes['user_id'] = Auth::User()->id;

        $this->attributes['name']    = $value;
        $this->attributes['slug']    = str_slug($value, '-');
    }
}
