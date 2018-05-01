<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    /**
     * Fillable fields for a Type
     *
     * @var array
     */

    protected $fillable = [
        'name',
        'slug',
        'description'
    ];
}
